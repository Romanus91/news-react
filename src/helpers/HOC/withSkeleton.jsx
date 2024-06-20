import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Components, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Components {...restProps} />;
  };
}
