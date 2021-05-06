<template>
    <div class="productDetail">
        <div class="product">
            <div class="left">
                <img
                    src="@/assets/image/products/product_samsung_EA2732_tv.jpg"
                />
            </div>
            <div class="right">
                <span class="description">
                    SAMSUNG QE 65Q70T 65" 163 CM 4K UHD SMART QLED TV,DAHİLİ UYDU ALICI
                </span>
                <span class="price"> 5000₺ </span>
                <input type="submit" value="Sepete Ekle" class="addToCart">
            </div>
        </div>
        <div class="productProperty">
            <h1 class="text-center">Ürün Özellikleri</h1>
                <div class="properties">
                    <span class="property"><b>İşlemci:</b> Quad</span>
                    <span class="property"><b>Ekran Boyutu:</b> 55 inch</span>
                    <span class="property"><b>Çözünürlük (Piksel):</b> 3840 x 2160</span>
                    <span class="property"><b>Bağlantı Özellikleri:</b> 3x HDMI</span>
                    <span class="property"><b>Çözünürlük:</b> 4K Ultra HD</span>
                    <span class="property"><b>Ekran Boyu (cm):</b> 139</span>
                    <span class="property"><b>Wi-Fi:</b> Var</span>
                    <span class="property"><b>Bağlantı Özellikleri:</b> 2x USB</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.productDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .product {
        width: 60%;
        display: flex;
        .left {
            margin-right: 50px;
        }
        .right {
            display: flex;
            flex-direction: column;
            padding: 50px 20px;
            .description {
                font-size: 22px;
                font-weight: 500;
            }
            .price {
                font-size: 50px;
                color: #684EDE;
            }
            .addToCart {
                display: block;
                background: white;
                padding: 20px;
                font-size: 20px;
                margin-top: 100px;
                cursor: pointer;
                &:hover {
                    color: white;
                    background: black;
                    
                }
                span {
                    border: 3px solid black;
                    padding: 10px 100px;
                }
            }
        }
    }
    .productProperty{ 
        display: flex;
        flex-direction: column;
        width: 60%;

        .properties{
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;

            .property{
                font-size: 20px;
                width: 50%;
                padding: 20px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>