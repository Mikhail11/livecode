import { TBuildPath } from './buildPath.interfaces';

export const buildPath: TBuildPath = (route, routeParams, searchParams) => {
  const segments = route.split('/');

  if (routeParams) {
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];

      const isRouteParam = segment.startsWith(':');

      const paramValue = routeParams?.[segment.slice(1)];

      if (!isRouteParam || !paramValue) {
        continue;
      }

      segments[i] = paramValue;
    }
  }

  if (searchParams) {
    const params = new URLSearchParams();

    for (const key in searchParams) {
      params.set(key, searchParams[key]);
    }

    return `${segments.join('/')}?${params}`;
  }

  return segments.join('/');
};
