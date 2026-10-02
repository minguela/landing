// Simple markdown-to-HTML renderer for blog posts
export function renderMarkdown(md: string): string {
  if (!md) return ''

  const codeBlocks: string[] = []
  const withoutCodeBlocks = md.replace(/```([^\n]*)\n([\s\S]*?)```/g, (_match, rawLang, code) => {
    const lang = /^[a-z0-9_-]{1,30}$/i.test(rawLang.trim()) ? rawLang.trim() : 'plaintext'
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const token = `CONTENTCODEBLOCK${codeBlocks.length}TOKEN`
    codeBlocks.push(`<pre class="code-block"><code class="language-${lang}">${escaped}</code></pre>`)
    return token
  })

  const rendered = withoutCodeBlocks
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/^---$/gm, '<hr class="my-8 border-white/10" />')
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-xl font-semibold text-white sm:text-2xl">$1</h2>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-300">$1</li>')
    .replace(/^\d+\.\s(.+)$/gm, '<li class="ml-4 list-decimal text-slate-300">$1</li>')
    .replace(/((?:<li class="ml-4 list-disc[^>]*>[\s\S]*?<\/li>\n?)+)/g, '<ul class="my-3 space-y-1.5">$1</ul>')
    .replace(/((?:<li class="ml-4 list-decimal[^>]*>[\s\S]*?<\/li>\n?)+)/g, '<ol class="my-3 space-y-1.5">$1</ol>')
    .replace(/\n\n/g, '</p><p class="my-3 text-slate-300 leading-7">')
    .replace(/\n/g, '<br />')
    .replace(/^/, '<p class="my-3 text-slate-300 leading-7">')
    .replace(/$/, '</p>')
    .replace(/<p class="my-3 text-slate-300 leading-7"><\/p>/g, '')
    .replace(/<p class="my-3 text-slate-300 leading-7"><br \/><\/p>/g, '')

  return rendered.replace(/CONTENTCODEBLOCK(\d+)TOKEN/g, (_match, index) => codeBlocks[Number(index)] ?? '')
}
