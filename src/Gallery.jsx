import React from "react";
import ImageGrid from "./ImageGrid";

import e1 from "./Photos/e1.jpg";
import e2 from "./Photos/e2.jpg";
import e3 from "./Photos/e3.jpg";
import e4 from "./Photos/e4.jpg";
import e5 from "./Photos/e5.jpg";
import e6 from "./Photos/e6.jpg";
import e7 from "./Photos/e7.jpg";
import e8 from "./Photos/e8.jpg";
import e9 from "./Photos/e9.jpg";
import e10 from "./Photos/e10.jpg";

import n1 from "./Photos/n1.jpg";
import n2 from "./Photos/n2.jpg";
import n3 from "./Photos/n3.jpg";
import n4 from "./Photos/n4.jpg";
import n5 from "./Photos/n5.jpg";
import n6 from "./Photos/n6.jpg";
import n7 from "./Photos/n7.jpg";
import n8 from "./Photos/n8.jpg";
import n9 from "./Photos/n9.jpg";
import n10 from "./Photos/n10.jpg";

import w1 from "./Photos/w1.jpg";
import w2 from "./Photos/w2.jpg";
import w3 from "./Photos/w3.jpg";
import w4 from "./Photos/w4.jpg";
import w5 from "./Photos/w5.jpg";
import w6 from "./Photos/w6.jpg";
import w7 from "./Photos/w7.jpg";
import w8 from "./Photos/w8.jpg";
import w9 from "./Photos/w9.jpg";
import w10 from "./Photos/w10.jpg";

import p1 from "./Photos/p1.jpg";
import p2 from "./Photos/p2.jpg";
import p3 from "./Photos/p3.jpg";
import p4 from "./Photos/p4.jpg";
import p5 from "./Photos/p5.jpg";
import p6 from "./Photos/p6.jpg";
import p7 from "./Photos/p7.jpg";
import p8 from "./Photos/p8.jpg";
import p9 from "./Photos/p9.jpg";
import p10 from "./Photos/p10.jpg";

function Gallery() {
  return (
    <section id="gallery" className="py-14 px-6 md:px-10 bg-amber-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-amber-300">
        Gallery
      </h2>

      <ImageGrid
        title="Nature"
        images={[
          n1, n2, n3, n4, n5, n6, n7, n8, n9, n10
        ]}
      />

      <ImageGrid
        title="Wildlife"
        images={[
          w1, w2, w3, w4, w5, w6, w7, w8, w9, w10
        ]}
      />

      <ImageGrid
        title="Events"
        images={[
          e1, e2, e3, e4, e5, e6, e7, e8, e9, e10
        ]}
      />

      <ImageGrid
        title="Portraits"
        images={[
          p1, p2, p3, p4, p5, p6, p7, p8, p9, p10
        ]}
      />
    </section>
  );
}

export default Gallery;