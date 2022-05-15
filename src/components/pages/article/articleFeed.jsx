import { memo, useContext } from 'react'
import { LocaleContext } from '../../../context/localeContext';
import '../news/style.scss';

const ArticleFeed = ({ selected }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <>
      {selected && (
        <>
          <div
            className="main_news_container"
            style={{padding: 0}}
          >
            <div className="current_news_wrapper">
              <div className="news_img_wrapper">
                <img src={selected.image} alt="" />
              </div>
              <div className="news_content_wrapper">
                
                <div className="news_text_wrapper">
                  <h3>{selected[`title_${locale}`]}</h3>
                  <p style={{marginTop:`12px`}}>{selected[`description_${locale}`]}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(ArticleFeed)
