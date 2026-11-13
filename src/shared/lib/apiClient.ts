import type { ApiRequestOptions } from "@/shared/types/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function getApiUrl(path: string): URL {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new ApiError("Chưa cấu hình NEXT_PUBLIC_API_BASE_URL.", 0);
  }

  const normalizedBaseUrl = `${baseUrl.replace(/\/+$/, "")}/`;
  return new URL(path.replace(/^\/+/, ""), normalizedBaseUrl);
}

export const apiClient = {
  async request(path: string, options: ApiRequestOptions = {}): Promise<unknown> {
    const headers = new Headers({
      Accept: "application/json",
    });

    if (options.body !== undefined) {
      headers.set("Content-Type", "application/json");
    }

    if (options.token) {
      headers.set("Authorization", `Bearer ${options.token}`);
    }

    const response = await fetch(getApiUrl(path), {
      method: options.method ?? "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });

    if (!response.ok) {
      throw new ApiError(
        `Yêu cầu API thất bại (${response.status} ${response.statusText}).`,
        response.status,
      );
    }

    if (response.status === 204) {
      return null;
    }

    // Dữ liệu API là unknown; service của feature chịu trách nhiệm kiểm tra và ánh xạ DTO.
    const payload: unknown = await response.json();
    return payload;
  },
};
