import React from 'react'

const Converter = () => {
  return (
    <div className="coverter_container">
      <div className="converter_wrapper">
        <div className="covert_card">
          <div className="card_header">
            <span>Փոխարժեքներն այսօր</span>
          </div>
          <div className="card_container"></div>
          <div className="card_footer">
            <span>Թարմացվել է ՝ 18/05/2022</span>
          </div>
        </div>
        <div className="covert_calculator"></div>
        <div className="covert_card">
          <div className="card_header">
            <span>Տոկոսադրույքներ</span>
          </div>
          <div className="card_container"></div>
          <div className="card_footer">
            <span>Թարմացվել է ՝ 18/05/2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Converter)
