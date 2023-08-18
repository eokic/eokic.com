import type { Directive } from 'micromark-extension-directive'
import { micromark } from 'micromark'
import { directive, directiveHtml } from 'micromark-extension-directive'


export default function markdownToHTML (
  body: string | null | undefined,
): string {
  if (!body) return ''

  const HTML = micromark(body, {
    extensions: [directive()],
    htmlExtensions: [directiveHtml({ link, xs, sm, md, lg })],
  })

  return HTML
}

function link (dir: Directive): boolean | undefined {
  if (dir.type !== 'textDirective') return false

  this.tag(`<a class='link' href='${dir.attributes?.url}' `)

  if (!dir.attributes?.internal) {
    this.tag('rel="noopener noreferrer"')
    this.tag('referrerpolicy="no-referrer"')
    this.tag('target="_blank"')
  }

  this.tag(`><span>${dir.label}</span></a>`)
}

function xs (dir: Directive): boolean | undefined {
  if (dir.type !== 'textDirective') return false
  const split = dir.label.split('||')
  if (split[0]) this.tag(`<span class="hidden xs:inline">${split[0]}</span>`)
  if (split[1]) this.tag(`<span class="max-xs:inline hidden" aria-hidden="true">${split[1]}</span>`)
}

function sm (dir: Directive): boolean | undefined {
  if (dir.type !== 'textDirective') return false
  const split = dir.label.split('||')
  if (split[0]) this.tag(`<span class="hidden sm:inline">${split[0]}</span>`)
  if (split[1]) this.tag(`<span class="max-sm:inline hidden" aria-hidden="true">${split[1]}</span>`)
}

function md (dir: Directive): boolean | undefined {
  if (dir.type !== 'textDirective') return false
  const split = dir.label.split('||')
  if (split[0]) this.tag(`<span class="hidden md:inline">${split[0]}</span>`)
  if (split[1]) this.tag(`<span class="max-md:inline hidden" aria-hidden="true">${split[1]}</span>`)
}

function lg (dir: Directive): boolean | undefined {
  if (dir.type !== 'textDirective') return false
  const split = dir.label.split('||')
  if (split[0]) this.tag(`<span class="hidden lg:inline">${split[0]}</span>`)
  if (split[1]) this.tag(`<span class="max-lg:inline hidden" aria-hidden="true">${split[1]}</span>`)
}
