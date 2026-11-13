import path from "node:path";

const sourceRoot = path.resolve("src");
const featuresRoot = path.join(sourceRoot, "features");

function getFeatureName(filePath) {
  const relativePath = path.relative(featuresRoot, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return relativePath.split(path.sep)[0] || null;
}

function resolveImportPath(importPath, importerPath) {
  if (importPath.startsWith("@/")) {
    // Đồng bộ alias @/* với cấu hình paths trong tsconfig.json.
    return path.resolve(sourceRoot, importPath.slice(2));
  }

  if (importPath.startsWith(".")) {
    return path.resolve(path.dirname(importerPath), importPath);
  }

  return null;
}

const noCrossFeatureImport = {
  meta: {
    type: "problem",
    docs: {
      description: "Ngăn một feature import trực tiếp từ feature khác.",
    },
    schema: [],
    messages: {
      crossFeature:
        'Feature "{{sourceFeature}}" không được import trực tiếp từ feature "{{targetFeature}}". Hãy chuyển phần dùng chung vào shared/.',
    },
  },
  create(context) {
    const importerPath = context.filename;
    const sourceFeature = getFeatureName(importerPath);

    if (!sourceFeature) {
      return {};
    }

    function checkImport(node, sourceNode) {
      if (!sourceNode || typeof sourceNode.value !== "string") {
        return;
      }

      const targetPath = resolveImportPath(sourceNode.value, importerPath);
      if (!targetPath) {
        return;
      }

      const targetFeature = getFeatureName(targetPath);
      if (targetFeature && targetFeature !== sourceFeature) {
        context.report({
          node: sourceNode,
          messageId: "crossFeature",
          data: { sourceFeature, targetFeature },
        });
      }
    }

    return {
      ImportDeclaration(node) {
        checkImport(node, node.source);
      },
      ExportNamedDeclaration(node) {
        checkImport(node, node.source);
      },
      ExportAllDeclaration(node) {
        checkImport(node, node.source);
      },
      ImportExpression(node) {
        checkImport(node, node.source);
      },
    };
  },
};

export default noCrossFeatureImport;
