import { forwardRef } from "react";

const Group = forwardRef((props, ref) => {
  //   console.log(props);
  //   console.log(ref.current);
  return <button ref={ref}>Group button</button>;
});

export default Group;
