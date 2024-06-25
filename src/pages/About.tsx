import React from 'react';
import { Container, Typography, Box } from '@mui/material';



const About: React.FC = () => {
    return (
        <Container>
            <Box my={4}>

                <Typography variant="h3" component="h1" gutterBottom>
                    About Megaline KG
                </Typography>

                <Typography variant="body1" paragraph>
                    Megaline KG is a leading internet service provider in Kyrgyzstan, offering a wide range of services including high-speed internet, television, and telephony. Established with the aim to provide reliable and affordable internet solutions, Megaline KG has become a trusted name in the industry.
                </Typography>

                <Typography variant="body1" paragraph>
                    Our services include various internet plans tailored to meet the needs of different customer segments, from individuals and households to businesses. We offer speeds up to 300 Mbps, ensuring that our customers enjoy seamless connectivity for both personal and professional use.
                </Typography>

                <Typography variant="body1" paragraph>
                    In addition to internet services, Megaline KG provides IPTV services, allowing customers to enjoy a variety of television channels, including popular sports, news, and entertainment channels. Our telephony services ensure reliable and high-quality voice communication.
                </Typography>

                <Typography variant="body1" paragraph>
                    Megaline KG is committed to customer satisfaction, offering robust customer support through multiple channels including email, phone, and live chat. We continuously invest in our infrastructure to enhance service quality and expand our coverage across Kyrgyzstan.
                </Typography>

                <Typography variant="body1" paragraph>
                    For more information, visit our official website or contact our customer service team.
                </Typography>

            </Box>
        </Container>
    );
};

export default About;
