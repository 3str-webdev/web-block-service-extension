const baseURL = "http://localhost:3000";

class ApiError extends Error {
  constructor(public data: unknown) {
    super("Api Error");
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method: method.toUpperCase(),
      credentials: "include",
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (!response.status.toString().startsWith("2")) {
    throw new ApiError(response);
  }

  const responseContent = await response.text();

  if (responseContent) {
    return JSON.parse(responseContent);
  }

  return {} as T;
};

export default createInstance;

export type ErrorType<Error> = Error;
export type BodyType<BodyData> = BodyData;
