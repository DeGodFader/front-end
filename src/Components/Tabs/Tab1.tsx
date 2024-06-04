import styled from "styled-components";
import { Tabs as AntTabs } from "antd"

export const Tabs = styled(AntTabs)`
  & .ant-tabs-nav {
    background: var(--color-6-500);
    border-radius: 3.5rem;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 0;
    margin-top: 2rem;

    .ant-tabs-nav-wrap {
      flex-wrap: wrap;

      .ant-tabs-nav-list {
        min-width: 100%;
        justify-content: space-between;
        

        .ant-tabs-ink-bar {
          display: none;
        }

        .ant-tabs-tab {
          width: 100%;
          margin: 0;
          padding: 1.2rem 1.8rem;
          text-align: center;
          display: flex;
          justify-content: center;

          .ant-tabs-tab-btn {
            font-family: QuickSand;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            color: var(--cplor-primary-800);
            & :hover {
                color: var(--cplor-primary-800);
            }
          }

          & :hover {
            color: var(--cplor-primary-800);
          }
        }

        .ant-tabs-tab-active {
          border-radius: 1.8rem;
          background: var(--color-primary);
          box-shadow: 0px 1px 2px 0px #0000001a;
          .ant-tabs-tab-btn {
            font-family: QuickSand;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            color: var(--cplor-primary-800);
          }
        }
      }
    }

    .ant-tabs-content-holder{
        padding: 0;
    }
  }
`
export const Tabs2 = styled(AntTabs)`
  & .ant-tabs-nav {
    background: var(--color-6-500);
    border-radius: 3.5rem;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 0;
    margin-top: 2rem;

    .ant-tabs-nav-wrap {
      flex-wrap: wrap;

      .ant-tabs-nav-list {
        justify-content: space-between;
        

        .ant-tabs-ink-bar {
          display: none;
        }

        .ant-tabs-tab {
          width: 100%;
          margin: 0;
          padding: 1.2rem 1.8rem;
          text-align: center;
          display: flex;
          justify-content: center;

          .ant-tabs-tab-btn {
            font-family: QuickSand;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            color: var(--cplor-primary-800);
            & :hover {
                color: var(--cplor-primary-800);
            }
          }

          & :hover {
            color: var(--cplor-primary-800);
          }
        }

        .ant-tabs-tab-active {
          border-radius: 1.8rem;
          background: var(--color-primary);
          box-shadow: 0px 1px 2px 0px #0000001a;
          .ant-tabs-tab-btn {
            font-family: QuickSand;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            color: var(--cplor-primary-800);
          }
        }
      }
    }

    .ant-tabs-content-holder{
        padding:0
    }
  }
`