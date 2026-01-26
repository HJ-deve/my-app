import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const PhotoCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 4px;
`;

interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

async function fetchPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Error occurs');
  }
  const parsedData = await response.json();
  const transformedPhotos = parsedData.slice(0, 4);

  return transformedPhotos;
}

const App = () => {
  const [photos, setPhotos] = useState<ReadonlyArray<Photo>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 4)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {photos.map((photo) => (
        <PhotoCard key={photo.id}>
          <Title>{photo.title}</Title>
          <Photo src={photo.thumbnailUrl} alt={photo.title} />
        </PhotoCard>
      ))}
    </Container>
  );
};

export default App;
