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
                <div class="addToCart"><span>Sepete Ekle</span></div>
            </div>
        </div>
        <div class="productProperty">
            <h1>Ürün Özellikleri</h1>


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
                font-size: 20px;
                margin-top: 100px;
                cursor: pointer;
                &:hover {
                    color: red;
                }
                span {
                    border: 3px solid black;
                    padding: 10px 100px;
                }
            }
        }
    }
}
</style>