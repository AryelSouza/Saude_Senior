
export const UP = {
  direction: [0, -1],
  modes: ['reversed', 'vertical']
}

export const DOWN = {
  direction: [0, 1],
  modes: ['vertical']
}

export const LEFT = {
  direction: [-1, 0],
  modes: ['reversed', 'horizontal']
}

export const LEFT_UP = {
  direction: [-1, -1],
  modes: ['reversed', 'diagonal']
}

export const LEFT_DOWN = {
  direction: [-1, 1],
  modes: ['reversed', 'diagonal']
}

export const RIGHT = {
  direction: [1, 0],
  modes: ['horizontal']
}

export const RIGHT_UP = {
  direction: [1, -1],
  modes: ['diagonal']
}

export const RIGHT_DOWN = {
  direction: [1, 1],
  modes: ['diagonal']
}