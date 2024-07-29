import { useParams } from "react-router-dom";
import Viewer from "react-viewer";

function ImageViewer() {
  const { id } = useParams();

  return (
    <div>
      <Viewer
        visible={true}
        images={[
          { src: `../../../../public/images/GoT/${id}.png` },
          { src: `../../../../public/images/GoT/${1}.png` },
          { src: `../../../../public/images/GoT/${2}.png` },
          { src: `../../../../public/images/GoT/${3}.png` },
          { src: `../../../../public/images/GoT/${4}.png` },
          { src: `../../../../public/images/GoT/${5}.png` },
          { src: `../../../../public/images/GoT/${6}.png` },
          { src: `../../../../public/images/GoT/${7}.png` },
          { src: `../../../../public/images/GoT/${8}.png` },
          { src: `../../../../public/images/GoT/${9}.png` },
          { src: `../../../../public/images/GoT/${10}.png` },
          { src: `../../../../public/images/GoT/${11}.png` },
          { src: `../../../../public/images/GoT/${12}.png` },
        ]}
      />
    </div>
  );
}

export default ImageViewer;
