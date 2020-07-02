import { css } from '@emotion/core'

export default () => css`
  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  button,
  input[type=button] {
    background: transparent;
    border: 0;
    border-radius: 0;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    &:focus {
      outline: none;
    }
  }
`
