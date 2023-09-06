export interface CarouselItemProps {
  imgUrl: string;
  title: string;
}

export default function CarouselItem({ imgUrl, title }: CarouselItemProps) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={title}></img>
    </div>
  );
}