const repoRoot = 'https://github.com/KaisenSushi/Programming-learning/blob/course/complete-curriculum/'

const modules = [
  {
    id: '00',
    slug: '00-getting-started',
    title: 'Getting started',
    time: 'start here',
    beginner: 'Set up your tools and run your first program',
    advanced: 'Review processes paths shells and development environments',
    beginnerDepth: ['know which folder you are working in', 'run Python from a terminal', 'save the full error when something fails'],
    advancedDepth: ['source code and machine instructions', 'processes threads and memory', 'PATH shells and isolated environments'],
    lessons: [
      ['How computers run programs', '01-how-computers-run-programs.md', 'lesson'],
      ['Prepare your workspace', '02-preparing-your-workspace.md', 'lesson'],
      ['Terminal and files', '03-terminal-and-files.md', 'lesson']
    ]
  },
  {
    id: '01',
    slug: '01-python',
    title: 'Python',
    time: 'core skill',
    beginner: 'Write programs with input choices loops and functions',
    advanced: 'Strengthen validation data flow and program structure',
    beginnerDepth: ['read input and print a result', 'make choices and repeat work', 'split code into useful functions'],
    advancedDepth: ['type conversion and validation boundaries', 'function contracts and error handling', 'collections chosen by the work they support'],
    lessons: [
      ['Values types and input', '01-values-and-input.md', 'lesson'],
      ['Decisions and loops', '02-decisions-and-loops.md', 'lesson'],
      ['Functions and collections', '03-functions-and-collections.md', 'lesson']
    ]
  },
  {
    id: '02',
    slug: '02-git-github',
    title: 'Git and GitHub',
    time: 'save your work',
    beginner: 'Track changes undo mistakes and share a project',
    advanced: 'Build a safer branch review and recovery workflow',
    beginnerDepth: ['make useful commits', 'work on a separate branch', 'push a repository to GitHub'],
    advancedDepth: ['inspect history before recovery', 'understand local and remote branches', 'use pull requests for review'],
    lessons: [
      ['Track changes', '01-tracking-changes.md', 'lesson'],
      ['Branches and safe recovery', '02-branches-and-recovery.md', 'lesson'],
      ['Working with GitHub', '03-working-with-github.md', 'lesson']
    ]
  },
  {
    id: '03',
    slug: '03-problem-solving',
    title: 'Problem solving',
    time: 'think first',
    beginner: 'Turn a confusing problem into small steps',
    advanced: 'Reason about contracts correctness and tradeoffs',
    beginnerDepth: ['work out the input and result', 'make examples by hand', 'write the steps before the code'],
    advancedDepth: ['state constraints and invariants', 'compare time and memory costs', 'separate correctness from optimization'],
    lessons: [
      ['Understand the problem', '01-understand-the-problem.md', 'lesson'],
      ['Design an algorithm', '02-design-an-algorithm.md', 'lesson'],
      ['Test and improve', '03-test-and-improve.md', 'lesson']
    ]
  },
  {
    id: '04',
    slug: '04-data-structures',
    title: 'Data structures',
    time: 'organize data',
    beginner: 'Choose a good way to store and find values',
    advanced: 'Compare operation costs and representation tradeoffs',
    beginnerDepth: ['lists sets and dictionaries', 'stacks and queues', 'trees heaps and graphs'],
    advancedDepth: ['average and worst case costs', 'linked and contiguous storage', 'one data set represented in different ways'],
    lessons: [
      ['Sequences sets and mappings', '01-sequences-and-mappings.md', 'lesson'],
      ['Stacks queues and linked lists', '02-stacks-queues-linked-lists.md', 'lesson'],
      ['Trees heaps and graphs', '03-trees-heaps-graphs.md', 'lesson']
    ]
  },
  {
    id: '05',
    slug: '05-algorithms',
    title: 'Algorithms',
    time: 'solve faster',
    beginner: 'Learn common ways to search sort and follow routes',
    advanced: 'Connect correctness assumptions and growth costs',
    beginnerDepth: ['linear and binary search', 'BFS and DFS', 'reuse repeated smaller answers'],
    advancedDepth: ['sorting and search requirements', 'graph traversal guarantees', 'dynamic programming state design'],
    lessons: [
      ['Searching and sorting', '01-searching-and-sorting.md', 'lesson'],
      ['Graph traversal', '02-graph-traversal.md', 'lesson'],
      ['Dynamic programming', '03-dynamic-programming.md', 'lesson']
    ]
  },
  {
    id: '06',
    slug: '06-testing-debugging',
    title: 'Testing and debugging',
    time: 'find what broke',
    beginner: 'Check your code and fix bugs without guessing',
    advanced: 'Design reliable tests and isolate hard failures',
    beginnerDepth: ['turn one rule into one test', 'reproduce the smallest failure', 'check one possible cause at a time'],
    advancedDepth: ['boundaries partitions and regression cases', 'unit integration and end to end tests', 'determinism coverage and failure reports'],
    lessons: [
      ['Writing useful tests', '01-writing-tests.md', 'lesson'],
      ['Debugging step by step', '02-debugging.md', 'lesson'],
      ['Test design and maintenance', '03-test-design.md', 'lesson']
    ]
  },
  {
    id: '07',
    slug: '07-sql-databases',
    title: 'SQL and databases',
    time: 'keep data',
    beginner: 'Store related facts and find them again',
    advanced: 'Design safer schemas queries and transactions',
    beginnerDepth: ['tables rows columns and keys', 'queries filters and joins', 'safe changes with transactions'],
    advancedDepth: ['normalization and constraints', 'parameterized queries and indexes', 'transaction boundaries and rollback'],
    lessons: [
      ['Tables and relationships', '01-relational-design.md', 'lesson'],
      ['Queries and joins', '02-queries.md', 'lesson'],
      ['Changes and transactions', '03-transactions.md', 'lesson']
    ]
  },
  {
    id: '08',
    slug: '08-c',
    title: 'C',
    time: 'see the details',
    beginner: 'Learn how compiled code and memory work',
    advanced: 'Practice memory ownership and multi file builds',
    beginnerDepth: ['types functions and control flow', 'addresses pointers and arrays', 'compile link and run a program'],
    advancedDepth: ['object lifetime and bounds', 'allocation cleanup and undefined behavior', 'headers object files and linker errors'],
    lessons: [
      ['Language basics', '01-language-basics.md', 'lesson'],
      ['Pointers and memory', '02-pointers-memory.md', 'lesson'],
      ['Compilation and program structure', '03-compilation.md', 'lesson']
    ]
  },
  {
    id: '09',
    slug: '09-computer-architecture',
    title: 'Computer architecture',
    time: 'below the code',
    beginner: 'See how code becomes work inside a computer',
    advanced: 'Connect execution memory layout and performance',
    beginnerDepth: ['bits bytes and number formats', 'CPU memory and storage', 'source code to a running process'],
    advancedDepth: ['instruction sets and virtual memory', 'cache locality and process layout', 'compiled interpreted and virtual machine paths'],
    lessons: [
      ['Bits and data', '01-binary-data.md', 'lesson'],
      ['CPU and memory', '02-cpu-memory.md', 'lesson'],
      ['From source to execution', '03-compilation-execution.md', 'lesson']
    ]
  }
]

const extraItems = [
  ['Exercises', 'exercises.md', 'practice'],
  ['Quiz', 'quiz.md', 'check'],
  ['Project', 'project.md', 'build'],
  ['Solutions', 'solutions.md', 'answers']
]

const storageKey = 'programming-learning-progress-v1'
const modeKey = 'programming-learning-mode-v1'
const list = document.querySelector('#module-list')
const template = document.querySelector('#module-template')
const search = document.querySelector('#course-search')
const emptyState = document.querySelector('#empty-state')
const modeNote = document.querySelector('#mode-note')
const nextTitle = document.querySelector('#next-title')
const nextDescription = document.querySelector('#next-description')
const nextLink = document.querySelector('#next-link')
const progressLabel = document.querySelector('#progress-label')
const progressBar = document.querySelector('#progress-bar')

let mode = localStorage.getItem(modeKey) === 'advanced' ? 'advanced' : 'beginner'
let progress = loadProgress()

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}')
    return saved && typeof saved === 'object' ? saved : {}
  } catch {
    return {}
  }
}

function itemKey(module, item) {
  return `${module.slug}/${item[1]}`
}

function allItems(module) {
  return [...module.lessons, ...extraItems]
}

function displayItems(module) {
  if (mode === 'beginner') return allItems(module)
  return [extraItems[1], extraItems[2], ...module.lessons, extraItems[0], extraItems[3]]
}

function renderModules() {
  list.replaceChildren()

  for (const module of modules) {
    const card = template.content.firstElementChild.cloneNode(true)
    const summary = card.querySelector('.module-summary')
    const details = card.querySelector('.module-details')
    const description = mode === 'beginner' ? module.beginner : module.advanced
    const depthItems = mode === 'beginner' ? module.beginnerDepth : module.advancedDepth

    card.dataset.search = [module.title, module.beginner, module.advanced, ...module.beginnerDepth, ...module.advancedDepth].join(' ').toLowerCase()
    card.querySelector('.module-index').textContent = module.id
    card.querySelector('.module-meta').textContent = module.time
    card.querySelector('.module-title').textContent = module.title
    card.querySelector('.module-description').textContent = description
    card.querySelector('.module-count').textContent = `${allItems(module).filter(item => progress[itemKey(module, item)]).length} of 7 done`
    card.querySelector('.depth-label').textContent = mode === 'beginner' ? 'what you will learn' : 'go deeper'
    card.querySelector('.module-home').href = `${repoRoot}${module.slug}/README.md`

    const depthList = card.querySelector('.depth-list')
    for (const depth of depthItems) {
      const li = document.createElement('li')
      li.textContent = depth
      depthList.append(li)
    }

    const lessonList = card.querySelector('.lesson-list')
    for (const item of displayItems(module)) {
      const row = document.createElement('div')
      const checkbox = document.createElement('input')
      const link = document.createElement('a')
      const type = document.createElement('span')
      const key = itemKey(module, item)

      row.className = 'lesson-row'
      checkbox.type = 'checkbox'
      checkbox.checked = Boolean(progress[key])
      checkbox.setAttribute('aria-label', `mark ${item[0]} as done`)
      checkbox.addEventListener('change', () => {
        progress[key] = checkbox.checked
        localStorage.setItem(storageKey, JSON.stringify(progress))
        updateProgress()
        card.querySelector('.module-count').textContent = `${allItems(module).filter(nextItem => progress[itemKey(module, nextItem)]).length} of 7 done`
      })

      link.textContent = item[0]
      link.href = `${repoRoot}${module.slug}/${item[1]}`
      type.className = 'lesson-type'
      type.textContent = item[2]
      row.append(checkbox, link, type)
      lessonList.append(row)
    }

    summary.addEventListener('click', () => {
      const open = summary.getAttribute('aria-expanded') === 'true'
      summary.setAttribute('aria-expanded', String(!open))
      details.hidden = open
    })

    list.append(card)
  }

  filterModules()
  updateProgress()
}

function filterModules() {
  const query = search.value.trim().toLowerCase()
  let shown = 0

  for (const card of list.querySelectorAll('.module-card')) {
    const match = !query || card.dataset.search.includes(query)
    card.hidden = !match
    if (match) shown += 1
  }

  emptyState.hidden = shown !== 0
}

function updateProgress() {
  const items = modules.flatMap(module => displayItems(module).map(item => ({ module, item })))
  const completed = items.filter(({ module, item }) => progress[itemKey(module, item)]).length
  const percent = Math.round((completed / items.length) * 100)
  const next = items.find(({ module, item }) => !progress[itemKey(module, item)])

  progressLabel.textContent = `${percent}%`
  progressBar.style.width = `${percent}%`

  if (next) {
    nextTitle.textContent = next.item[0]
    nextDescription.textContent = next.module.title
    nextLink.textContent = 'open next step'
    nextLink.href = `${repoRoot}${next.module.slug}/${next.item[1]}`
  } else {
    nextTitle.textContent = 'Course complete'
    nextDescription.textContent = 'You finished every lesson and project'
    nextLink.textContent = 'view the roadmap'
    nextLink.href = `${repoRoot}ROADMAP.md`
  }
}

function setMode(nextMode) {
  mode = nextMode
  localStorage.setItem(modeKey, mode)
  modeNote.textContent = mode === 'beginner'
    ? 'Follow these from 00 to 09'
    : 'Try each quiz and project first then open the lessons you need'

  for (const button of document.querySelectorAll('[data-mode]')) {
    const active = button.dataset.mode === mode
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-pressed', String(active))
  }

  renderModules()
}

for (const button of document.querySelectorAll('[data-mode]')) {
  button.addEventListener('click', () => setMode(button.dataset.mode))
}

search.addEventListener('input', filterModules)

document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault()
    search.focus()
  }
})

document.querySelector('#copy-setup').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status')
  try {
    await navigator.clipboard.writeText(document.querySelector('#setup-code').textContent)
    status.textContent = 'copied'
  } catch {
    status.textContent = 'select the commands and copy them'
  }
})

setMode(mode)
