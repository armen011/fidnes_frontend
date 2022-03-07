import React from 'react'
import { useNavigate } from 'react-router'
import "./style.scss"

const DropDown = ({ content }) => {
    const navigate = useNavigate()
    return (
        <ul className='drop_down_wrapper'>
            {content && content.map(({ title, url }, index) => <li className='page_title_wrapper' onClick={() => navigate(url)} key={index}>
                {title}
            </li>)}
        </ul>
    )
}

export default React.memo(DropDown)