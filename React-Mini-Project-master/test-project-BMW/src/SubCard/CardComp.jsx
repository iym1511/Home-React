import Card from 'react-bootstrap/Card';


function CardComp(card) {
    const cardInfo = [
        {
            image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6J7P10tLhu1XzWVo7puMLWFmdkAj5DOP5tpFZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAqNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztifjeqVYDafHJEjmztYRSJyL67aftxdTCxw1RSfWQlEm%25VxdSeZsNxuzWQdjc96k3aeZQ6Ko2DXRjcZwBEvmrx6Kc%252NuF4WwBKupkBQFe%252B3in2lIjup2XH5VGv63iprJ8OaGwXHi4TPsd9%25rJHFlM9pou4TJIsDqGL3FlTv0YCUyXIslGAtMHCrv0s9OfDFE4GA0ogSYVNF9OALUdKmkIogOybAgrnvLUgChOq85GybUEqgtE89ChbNmUfCPoEqhk7bSqMLNmqn1hdxDyk7m5VqQpYCn178zm9qtE5V1Pa7oDfN8zVMR1LpSkPazDxK9QdnMRaYWB2YQ5DxRte2pfZ8YWxfjpiPcPteWS6iHgKMfjedwHGNBDS6jQ%25JLn2Ydw6ZuTneptQ%25wc3lO5ifZu%25KXs17HSc3uBrK1JJdKX324B8tTQBrXpF2%25%25lZ24riIpzsscpF4Hv4Ux0KiIFJGFXLABHvIT9IqcO2JGvlovlWgpT9GsLGsTUilo90y93JbHsLoACoHKhJ0yLOELmiqTACygNy7YmlOECUkrb77sgNEbn4Yp10UkNh5FtOVAbnkq8Sp4zOSnjXWPkJEF%255SYCjyON74mvhU26",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br />
            <Card>
            <Card.Img variant="top" src={card.image}  />
            <Card.Body>
            <Card.Text>
                <h3>BMW i4 M50</h3>
                <p style={{color:'#3b35bc'}}>순수전기</p>
                <p>$ 84,900,000 ~</p>
            </Card.Text>
            </Card.Body>
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

export default CardComp;