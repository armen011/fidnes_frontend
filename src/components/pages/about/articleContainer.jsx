import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'
import Icon from '../../core/Icon'
import { AnimatePresence, motion } from 'framer-motion'
import { LocaleContext } from '../../../context/localeContext'
import CkContant from '../../core/CkContant'
import DateContainer from '../../core/UpdatedAt'
import { pages } from '../../../locales'

const ArticleItem = ({ id, setSelected, ...otherProps }) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const variantItem = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
      },
      exit: { opacity: 0 },
    }),
    []
  )
  return (
    <motion.li
      className="article_item_wrapper"
      variants={variantItem}
      onClick={() => {
        setSelected({ id, ...otherProps })
        if (otherProps.types && otherProps.types === 'url') {
          if (
            otherProps.link.includes('://fides.am') ||
            otherProps.link.includes('://www.fides.am')
          ) {
            window.location.replace(otherProps.link)
          } else {
            window.open(otherProps.link)
          }
        } else {
          navigate('?article=' + id)
        }
      }}
    >
      <span>{otherProps[`title_${locale}`]}</span>
      <Icon iconName="about_item_arrow_right" width={24} height={24} />
    </motion.li>
  )
}
const ArticleContainer = ({ articles, selected, setSelected }) => {
  const { locale } = useContext(LocaleContext)
  const variantList = useMemo(
    () => ({
      show: {
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.05,
          ease: 'easeInOut',
        },
      },
    }),
    []
  )
  const variantItem = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
      },
      exit: { opacity: 0 },
    }),
    []
  )
  return (
    <div className="article_wrapper">
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <>
            <CkContant {...selected} />
            <div className="files-wrapper">
              {selected.files &&
                selected.files.length !== 0 &&
                selected.files.map((item) => (
                  <a
                    href={item.file}
                    key={item.id}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M20.8971 5.67656L15.3189 0.09375H3.99863C3.50176 0.09375 3.09863 0.496875 3.09863 0.99375V16.9641H20.8971V5.67656Z"
                        fill="#EFF3F5"
                      ></path>
                      <path
                        d="M15.3193 4.77656C15.3193 5.27344 15.7225 5.67656 16.2193 5.67656H20.9021L15.3193 0.09375V4.77656Z"
                        fill="#DBDFE0"
                      ></path>
                      <path
                        d="M3.10352 16.959V23.0059C3.10352 23.5027 3.50664 23.9059 4.00352 23.9059H20.0019C20.4988 23.9059 20.9019 23.5027 20.9019 23.0059V16.959H3.10352Z"
                        fill="#F1786B"
                      ></path>
                      <path
                        d="M7.43505 15.9379C7.14912 15.9379 6.87255 15.8301 6.61943 15.6191C6.19287 15.2629 6.16005 14.8691 6.20224 14.6019C6.40849 13.3973 8.64912 12.2957 9.95224 11.752C10.6601 9.98008 11.2741 7.89414 11.6538 6.32851C10.8944 4.70195 10.6272 3.55352 10.8616 2.90195C10.9788 2.57852 11.2179 2.36758 11.5554 2.29258L11.6022 2.2832L11.6491 2.28789C11.6866 2.29258 12.0194 2.34414 12.2913 2.70977C12.6429 3.18789 12.7226 3.96133 12.5257 5.01133C12.4694 5.31133 12.3757 5.74258 12.2538 6.2582C12.9476 7.70195 13.9226 9.2957 14.7194 10.402C15.3851 10.3082 16.0179 10.2754 16.5522 10.3316C17.5507 10.4348 17.7616 10.8707 17.7991 11.1238C17.8554 11.4941 17.5835 11.8785 17.1194 12.0754C16.4772 12.3473 15.4272 12.2769 14.5741 11.1707C14.5366 11.1238 14.4991 11.0723 14.4616 11.0207C13.3647 11.2035 12.0897 11.5504 10.796 12.0332C10.6601 12.0848 10.5288 12.1363 10.3976 12.1879C9.52099 14.3348 8.66318 15.5676 7.84287 15.8629C7.71162 15.9144 7.57099 15.9379 7.43505 15.9379ZM9.63818 12.5113C7.77724 13.3504 6.8538 14.1801 6.76943 14.7004C6.75068 14.8129 6.75068 14.9863 6.98974 15.1832C7.21005 15.366 7.42099 15.4129 7.65537 15.3285C8.30693 15.0941 9.00068 13.9691 9.63818 12.5113ZM15.1226 10.9316C15.7554 11.677 16.4679 11.7379 16.8991 11.5504C17.1241 11.4566 17.2507 11.2973 17.2366 11.2082C17.2226 11.1145 17.0116 10.9551 16.496 10.9035C16.1116 10.866 15.6476 10.8754 15.1226 10.9316ZM12.0476 7.11601C11.7616 8.21758 11.3726 9.54414 10.9179 10.8285C10.8382 11.0488 10.7632 11.2598 10.6835 11.466C11.7007 11.091 12.9288 10.7254 14.096 10.5051C13.4679 9.60976 12.6944 8.36758 12.0476 7.11601ZM11.6257 2.87383C11.5179 2.91133 11.4476 2.98164 11.4054 3.10352C11.2413 3.55352 11.4569 4.40195 11.8741 5.40508C11.9116 5.22695 11.9444 5.06289 11.9726 4.91289C12.1882 3.7457 11.9819 3.24414 11.8366 3.05195C11.7569 2.94414 11.6726 2.89258 11.6257 2.87383Z"
                        fill="#F1786B"
                      ></path>
                      <path
                        d="M16.2385 20.0715H15.165V18.9793H16.2385C16.44 18.9793 16.6041 18.8152 16.6041 18.6137C16.6041 18.4121 16.44 18.248 16.2385 18.248H14.8041C14.6025 18.248 14.4385 18.4121 14.4385 18.6137V22.2512C14.4385 22.4527 14.6025 22.6168 14.8041 22.6168C15.0057 22.6168 15.1697 22.4527 15.1697 22.2512V20.798H16.2432C16.4447 20.798 16.6088 20.634 16.6088 20.4324C16.6041 20.2309 16.44 20.0715 16.2385 20.0715Z"
                        fill="#EFF3F5"
                      ></path>
                      <path
                        d="M8.50371 18.2529H7.76309C7.56152 18.2529 7.39746 18.417 7.39746 18.6186V22.2561C7.39746 22.4576 7.56152 22.6217 7.76309 22.6217C7.96465 22.6217 8.12871 22.4576 8.12871 22.2561V20.8029H8.50371C9.20683 20.8029 9.77871 20.2311 9.77871 19.5279C9.77871 18.8248 9.20683 18.2529 8.50371 18.2529ZM8.50371 20.0717H8.12871V18.9795H8.50371C8.80371 18.9795 9.04746 19.2232 9.04746 19.5232C9.04746 19.8232 8.80371 20.0717 8.50371 20.0717Z"
                        fill="#EFF3F5"
                      ></path>
                      <path
                        d="M11.6441 18.2529H10.6879C10.4863 18.2529 10.3223 18.417 10.3223 18.6186V22.2561C10.3223 22.4576 10.4863 22.6217 10.6879 22.6217H11.6441C12.8488 22.6217 13.8285 21.642 13.8285 20.4373C13.8285 19.2279 12.8488 18.2529 11.6441 18.2529ZM11.6441 21.8857H11.0535V18.9748H11.6441C12.4457 18.9748 13.0973 19.6264 13.0973 20.4279C13.102 21.2342 12.4457 21.8857 11.6441 21.8857Z"
                        fill="#EFF3F5"
                      ></path>
                    </svg>
                    {item[`title_${locale}`]}
                  </a>
                ))}
            </div>

            <DateContainer date={selected.updated_at} />
          </>
        ) : (
          <motion.ul
            variants={variantList}
            animate="show"
            initial="hidden"
            exit="hidden"
          >
            {articles.map((elm, index) => (
              <ArticleItem key={index} {...{ setSelected, ...elm }} />

            ))}
            {/* <li
              className="page_title_wrapper"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(`/management`, '_blank')
              }}
            >
              {pages.small_texts[`management_${locale}`]}
            </li> */}

            <motion.li
              className="article_item_wrapper"
              variants={variantItem}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(`/management`, '_blank')
              }}
            >
              <span>{pages.small_texts[`management_${locale}`]}</span>
              <Icon iconName="about_item_arrow_right" width={24} height={24} />
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(ArticleContainer)
