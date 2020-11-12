export const absolutePositioningStyles = `position: absolute;left: 0;top: 0;bottom: 0;right: 0;`;

export const isSsr = typeof window === "undefined";

const isIntersectionObserverAvailable = isSsr
  ? false
  : !!window.IntersectionObserver;

export function imageAddStrategy({
  lazyLoad,
  intersecting,
  loaded,
  nativeLoading,
}) {
  if (!lazyLoad || nativeLoading) {
    return true;
  }

  if (isSsr) {
    return false;
  }

  if (isIntersectionObserverAvailable) {
    return intersecting || loaded;
  }

  return true;
}

export const imageShowStrategy = ({ lazyLoad, loaded }) => {
  if (!lazyLoad) {
    return true;
  }

  if (isSsr) {
    return false;
  }

  if (isIntersectionObserverAvailable) {
    return loaded;
  }

  return true;
};
