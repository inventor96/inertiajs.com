import React from 'react'
import release from '@/Utils/release'
import { A, Code, H2, Li, P, Ul } from '@/Components'

export default release(
  <>
    <Ul>
      <Li>
        Added new <Code>app</Code> and <Code>link</Code> named exports, and have deprecated <Code>InertiaApp</Code> and{' '}
        <Code>InertiaLink</Code>.
      </Li>
      <Li>
        Added new <Code>plugin</Code> named export, and have deprecated using <Code>InertiaApp</Code> to register the
        plugin.
      </Li>
      <Li>
        Added the visit event callbacks to the <Code>{'<inertia-link>'}</Code> component (
        <A href="https://github.com/inertiajs/inertia/pull/235">#235</A>).
      </Li>
      <Li>
        Updated the <Code>$page</Code> property to return the full <Code>page</Code> object, instead of just the page{' '}
        <Code>props</Code>.
      </Li>
      <Li>
        Fixed issue where you couldn't access <Code>this</Code> in the <Code>remember</Code> callback (
        <A href="https://github.com/inertiajs/inertia/pull/214">#214</A>).
      </Li>
      <Li>
        [INTERNAL] Removed <Code>transformProps()</Code> call, since this is now now done in Inertia core.
      </Li>
    </Ul>
    <H2>Breaking changes</H2>
    <P>
      This release updates the global <Code>$page</Code> property to return the full <Code>page</Code> object, instead
      of just the page <Code>props</Code>. The purpose of this change is to better reflect what the{' '}
      <A href="/the-protocol#the-page-object">page object</A> is, and to make the other properties within the page
      object available to you, such as the <Code>url</Code>, <Code>version</Code> and <Code>component</Code> name. The
      upgrade path here is straightforward—simply replace all instances of <Code>$page</Code> with{' '}
      <Code>$page.props</Code>.
    </P>
    <P>
      This release also requires version <Code>0.4.0</Code> of the <Code>@inertiajs/inertia</Code> package. Please be
      sure to update your dependencies accordingly.
    </P>
  </>
)
