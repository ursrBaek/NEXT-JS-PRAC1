interface props {
  params: {
    [key: string]: string;
  };
}

export default function BlogPostPage(props: props) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{props.params.slug}</p>
    </main>
  );
}
