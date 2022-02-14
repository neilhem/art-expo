import { useEffect, useState } from 'react';
import { Button, Grid, Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchExhibitionListAsync,
  loadItems,
  selectExhibtionItems,
  selectExhibtionPage,
  selectExhibtionStatus,
} from './exhibitionSlice';
import { ExhibitionItem } from './ExhibitionItem';
import { ExhibitionResParams } from './exhibitionModel';

interface ExhibitionProps {
  initialItems: ExhibitionResParams['data'];
}

export function Exhibition({ initialItems }: ExhibitionProps) {
  const router = useRouter();
  const items = useAppSelector(selectExhibtionItems);
  const status = useAppSelector(selectExhibtionStatus);
  const page = useAppSelector(selectExhibtionPage);
  const dispatch = useAppDispatch();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    dispatch(loadItems(initialItems));
    setInitialLoad(false);
  }, []);

  const clickHandler = (id: number) => {
    router.push(`/exhibition/${id}`);
  };

  const fetchMore = () => {
    dispatch(fetchExhibitionListAsync({ page: page + 1 }));
  };

  if (status === 'loading' && initialLoad) return <Loading />;
  if (status === 'idle' && !initialItems.length) {
    return <p>No exhibition data</p>;
  }

  return (
    <>
      <Grid.Container css={{ marginBottom: 3 }} gap={2} justify="center">
        {items.map((item) => (
          <Grid xs={3} key={item.id}>
            <ExhibitionItem
              title={item.title}
              imageUrl={item.image_url}
              aicStartAt={item.aic_start_at}
              aicEndAt={item.aic_end_at}
              onClick={() => clickHandler(item.id)}
            />
          </Grid>
        ))}
      </Grid.Container>
      <Button onClick={fetchMore}>
        {status === 'loading' ? (
          <Loading color="white" size="sm" />
        ) : (
          'Load more'
        )}
      </Button>
    </>
  );
}
