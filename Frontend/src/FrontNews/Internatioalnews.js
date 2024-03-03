import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

export default function InternationalNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/internationalnews');
        if (response.data && Array.isArray(response.data)) {
          setNewsData(response.data);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Grid container spacing={2}>
        {loading && (
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Grid>
        )}

        {!loading &&
          newsData.map((news) => (
            <Grid item key={news._id} xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{news.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.article}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Published on: {new Date(news.date).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
