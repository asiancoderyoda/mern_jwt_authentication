import React from 'react';
import Homeone from '../assets/home-one.svg';
import Hometwo from '../assets/home-two.svg';

const Home = () => {
    return (
        <div className='container homecont'>
            <section class="fdb-block">
                <div class="container homecont">
                    <div class="row">
                    <div class="col text-center">
                        <h1>Authentication</h1>
                        <p>By Avigyan Bhakta</p>
                        <hr/>
                        <h3>What is JSON Web Token?</h3>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                        <p>Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                    </div>
                    </div>

                    <div class="row pt-5 justify-content-center align-items-center">
                    <div class="col-4">
                        <img alt="image" class="img-fluid" src={Homeone} />
                    </div>
                    <div class="col-4 offset-1">
                        <img alt="image" class="img-fluid" src={Hometwo} />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
