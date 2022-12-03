import Card from 'react-bootstrap/Card';


function MainCardComp2(card) {
    const cardInfo = [
        {
            image: "https://www.bmw.co.kr/content/dam/bmw/marketKR/bmw_co_kr/all-models/m-series/m8grancoupe/M50ixidrive.jpg/jcr:content/renditions/cq5dam.resized.img.980.medium.time1655979021126.jpg",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className="bg-dark text-white">
      <Card.Img src={card.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
            </>
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )

}

export default MainCardComp2;