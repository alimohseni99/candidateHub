export default function LoaderAnimation(props: prop) {
  return (
    <>
      <div className="m-auto size-40 mt-20 flex justify-center">
        <section className="flex gap-2">
          <span className="loader"></span> <div className="">{props.text}</div>
        </section>
      </div>
    </>
  );
}

type prop = {
  text: string;
};
