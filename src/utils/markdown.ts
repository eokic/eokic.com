import type { Directive } from 'micromark-extension-directive'
import { micromark } from 'micromark'
import { directive, directiveHtml } from 'micromark-extension-directive'


export default function markdownToHTML (
  body: string,
): string {
  return micromark(body, {
    extensions: [directive()],
    htmlExtensions: [directiveHtml({ xs, sm, md, lg })],
  })
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
