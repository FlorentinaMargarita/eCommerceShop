import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9x5jc4FNp809SJPCxkEuGzoiyqryl18m0htN1NM8JKsbVGqer&usqp=CAU",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://img.chewy.com/is/image/catalog/153750_MAIN._AC_SS55_V1551220717_.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://live.staticflickr.com/8066/8226738968_93035409ef_b.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://media.defense.gov/2017/Mar/03/2001706491/780/780/0/170228-F-CT367-247.JPG",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-vp2mVS75CRZ-xI60zVGMUm3R5NGvEeA2gT_zLFnuKzuCGcdM&usqp=CAU",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;