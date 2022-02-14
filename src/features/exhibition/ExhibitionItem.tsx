import { Card, Col, Text, Row, Button } from '@nextui-org/react';

import { formatDate } from '../../app/format';

interface ExhibitionItemProps {
  title: string;
  imageUrl: string;
  aicStartAt: Date;
  aicEndAt: Date;
  onClick: () => void;
}

export function ExhibitionItem({
  imageUrl,
  title,
  aicStartAt,
  aicEndAt,
  onClick,
}: ExhibitionItemProps) {
  return (
    <Card cover hoverable clickable onClick={onClick} css={{ w: '100%' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text h3 color="#ffffffAA">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src={imageUrl}
          height={400}
          width="100%"
          loading="lazy"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: 'absolute',
          bgBlur: '#ffffff',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {aicStartAt}
            </Text>
            <Text color="#000" size={12}>
              {aicEndAt}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
