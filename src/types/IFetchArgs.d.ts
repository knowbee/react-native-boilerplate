export default interface FetchArgs {
  method: 'GET' | 'POST' | 'PUT' | 'OPTION' | 'DELETE' | 'HEAD' | 'get' | 'post' | 'put' | 'option' | 'delete' | 'head';
  url: string;
  target?: 'realTimeServices' | undefined;
  baseUrl?: string;
  data?: { [key: string]: string } | Blob;
  bodyType?: 'json' | 'text' | 'blob';
  resType?: 'json' | 'text' | 'blob';
  token?: string;
  options?: { [key: string]: string | number | boolean };
  headers?: { [key: string]: string | number };
  cache?: string;
}
