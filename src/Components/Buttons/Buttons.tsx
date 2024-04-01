import { Button } from "antd"
import styled from "styled-components"

export const PrimaryButton=styled.div`
pading: 1px;
& .ant-btn-primary {
  padding: 10px;
  height: fit-content;
  font-size: 14px;
  font-family: "QuickSand", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 25px;
  background-color: var(--color-secondary-500);
  border-radius: 3rem;
  color: var(--color-neutral-500);
  text-align: center;

  &:hover {
    background-color: var(--color-secondary-600) !important;
  }
  &:disabled {
    background-color: var(--color-secondary-900) !important;
    border-color: var(--color-secondary-900) !important; 
  }
}
`