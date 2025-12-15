"use client";
import { useState } from "react";
import { CustomImage } from "./high-order-components/CustomImage";

interface Props {
  images: string[];
  itemName: string;
}

export const CustomPhotoGallery = ({ images, itemName }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="gap-4 flex flex-col">
      {/* Main image */}
      <div className="aspect-2x1 bg-gray-50 rounded-lg overflow-hidden border-2">
        <CustomImage
          src={images[selectedImage] || "/placeholder.svg"}
          alt={itemName}
          className="w-full object-cover"
        />
      </div>
      {/* Thumbnail images */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index
                ? "border-black"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <CustomImage
              src={image}
              alt={`${itemName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
