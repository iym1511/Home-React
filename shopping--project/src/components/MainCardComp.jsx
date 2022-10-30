import Card from 'react-bootstrap/Card';


function MainCardComp(card) {
    const cardInfo = [
        {
            image: "https://www.bmw.co.kr/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.980.medium.time1651158408008.jpg",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className="bg-dark text-white" >
      <Card.Img src={card.image} alt="Card image"/>
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

export default MainCardComp;