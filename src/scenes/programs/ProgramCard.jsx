import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProgramCard({ image, title }) {
  return (
    <Card
      sx={{
        maxWidth: 220,
        borderRadius: '10%',
        margin: 4,
        // minHeight: 345
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='30%'
          image={image}
          alt={title}
        />
        <CardContent
          sx={{
            minHeight: 84,
          }}
        >
          <Typography
            gutterBottom
            variant='subtitle'
            fontWeight='bold'
            component='div'
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProgramCard