import AlbumCard from "../cards/Images/AlbumCard";
import HomeSection from "./HomeSection";

function AlbumSection() {
  const albums = [
    { album_id: 0 },
    { album_id: 1 },
    { album_id: 2 },
    { album_id: 3 },
    { album_id: 4 },
    { album_id: 5 },
    { album_id: 6 },
    { album_id: 7 },
    { album_id: 8 },
    { album_id: 9 },
  ];

  return (
    <div>
      <HomeSection title={"Albums"}>
        {albums.map((album) => (
          <AlbumCard key={album.id} id={album.id} />
        ))}
      </HomeSection>
    </div>
  );
}

export default AlbumSection;
