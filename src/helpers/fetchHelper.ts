import IFetchArgs from 'src/types/IFetchArgs';

type FetchResult = {
  url: string;
  data: { [key: string]: any } | [];
  meta: { [key: string]: any };
  ok: boolean;
  type: string;
  status: number | string;
};

export default async (args: IFetchArgs): Promise<FetchResult> => {
  try {
    const { method, url, data, bodyType, resType, token, cache, options = {}, headers = {} } = args || {};
    const response = await fetch(url, {
      method: method || 'GET',
      mode: 'cors',
      ...(cache ? { cache } : {}),
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        ...(token ? { From: token } : {}),
        ...(headers || {}),
      }),
      ...(data ? { body: !bodyType || bodyType === 'json' ? JSON.stringify(data) : data } : {}),
      ...options,
    });
    let result = await response[resType || 'json']();
    result = {
      url: response.url,
      data: result.data || result,
      ok: response.ok,
      meta: result.meta,
      type: response.type,
      status: response.status,
      ...result,
    } as FetchResult;
    return result.status < 400 ? Promise.resolve(result) : Promise.reject(result);
  } catch (e) {
    throw new Error(e);
  }
};
