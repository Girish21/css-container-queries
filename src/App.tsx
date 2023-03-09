import {DATA} from './data'

function App() {
  return (
    <main>
      <header>
        <h1>Container Queries</h1>
      </header>
      <section>
        {DATA.map(data => (
          <Card key={data.id} {...data} />
        ))}
      </section>
    </main>
  )
}

function Card({
  description,
  image,
  subText,
  title,
}: {
  description: string
  image: string
  subText: string
  title: string
}) {
  return (
    <article>
      <div data-image-wrapper>
        <img aria-hidden src={image} />
      </div>
      <hgroup>
        <h2>{title}</h2>
        <p>{subText}</p>
      </hgroup>
      <p>{description}</p>
    </article>
  )
}

export default App
