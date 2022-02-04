import breakpointsMap from '../theme/breakpoints';

const media = Object.entries(breakpointsMap).reduce((mediaQueriesMap, [breakpointTag, breakpoint]) => {
  const mediaQueriesMapCopy = mediaQueriesMap;

  mediaQueriesMapCopy[
    breakpointTag as keyof typeof breakpointsMap
  ] = `@media screen and (min-width: ${breakpoint})`;

  return mediaQueriesMapCopy;
}, {} as typeof breakpointsMap);

export default media;
