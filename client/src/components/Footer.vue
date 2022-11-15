<template>
    <footer>
        <div class="footer">
            <div class="footer__top">
                <div class="footer__top__left">
                    <h1>Get to Know Us</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                    </ul>
                </div>
                <div class="footer__top__right">
                    <h1>Connect with Us</h1>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom__left">
                    <h1>Make Money with Us</h1>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                <div class="footer__bottom__right">
                    <h1>Let Us Help You</h1>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        padding: 30px 9rem;

    }
    .footer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
    }
    .footer__top {
        display: flex;
        justify-content: space-between;
    }
    .footer__top__left {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .footer__top__right {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .footer__bottom {
        display: flex;
        justify-content: space-between;
    }
    .footer__bottom__left {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .footer__bottom__right {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media screen and (max-width: 1024px) {
        footer {
            padding: 15px 40px;
        }
    }
</style>