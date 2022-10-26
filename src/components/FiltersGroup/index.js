import {BiSearch} from 'react-icons/bi'
import './index.css'

const FiltersGroup = props => {
  const {clearProductFilters, productSearch} = props

  const searchInput = event => {
    const {changeSearch} = props
    changeSearch(event.target.value)
  }

  const enterSearch = event => {
    const {getSearchInput} = props
    if (event.key === 'Enter') {
      getSearchInput()
    }
  }

  const renderRatingList = () => {
    const {changeRating, ratingsList} = props
    return ratingsList.map(item => {
      const {ratingId, imageUrl} = item
      const filterRating = () => {
        changeRating(ratingId)
      }

      const activeRating =
        ratingId === changeRating
          ? 'ratings-text active-rating'
          : 'ratings-text'
      return (
        <>
          <li className="ratings-cards" onClick={filterRating} key={ratingId}>
            <img
              src={imageUrl}
              alt={`rating ${ratingId}`}
              className="ratings-img"
            />
            <p className={activeRating}>& up</p>
          </li>
        </>
      )
    })
  }

  const renderCategoryList = () => {
    const {changeCategory, categoryOptions} = props
    return categoryOptions.map(item => {
      const {categoryId, name} = item

      const clickCategory = () => {
        changeCategory(categoryId)
      }

      const activeCategory =
        changeCategory === categoryId
          ? 'category-text active-category'
          : 'category-text'
      return (
        <li key={categoryId} onClick={clickCategory}>
          <div className="category-items">
            <p className={activeCategory}>{name}</p>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      {/* Replace this element with your code */}
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={productSearch}
          onChange={searchInput}
          onKeyDown={enterSearch}
        />
        <BiSearch className="search-icon" />
      </div>
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        <ul className="category-options">{renderCategoryList()}</ul>
      </div>
      <div className="ratings-container">
        <h1 className="ratings-heading">Ratings</h1>
        <ul className="ratings-options">{renderRatingList()}</ul>
      </div>
      <div className="clear-container">
        <button
          className="clear-btn"
          type="button"
          onClick={clearProductFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
