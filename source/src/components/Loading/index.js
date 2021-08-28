import ReactLoading from "react-loading";

function Loading({ type = "bubbles", color = "#000" }) {
  return <ReactLoading type={type} color={color} height={667} width={375} />;
}

export default Loading;
