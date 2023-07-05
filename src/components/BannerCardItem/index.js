const BannerCardItem = props => {
  const {bannerDet} = props
  const {headerText, description, className} = bannerDet
  const editClass = `"container" ${className}`
  return (
    <div className={editClass}>
      <h1>{headerText}</h1>
      <p>{description}></p>
      <button>Show more</button>
    </div>
  )
}

export default BannerCardItem
