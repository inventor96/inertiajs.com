import { A, Code, CodeBlock, H1, H2, Layout, Li, Ol, P, Strong, Ul } from '@/Components'

const meta = {
  title: 'inertia@v0.8.5',
}

const Page = () => {
  return (
    <>
      <H1>inertia@v0.8.5</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on February 24, 2021</div>
      <Ul>
        <Li>
          Added blob support (<A href="https://github.com/inertiajs/inertia/pull/515">#515</A>).
        </Li>
      </Ul>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
