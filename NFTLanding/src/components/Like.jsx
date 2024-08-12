import eth1 from '../assets/images/eth1.png';
import eth2 from '../assets/images/eth2.png';

export default function Like() {
  return (
    <div className='like'>
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />

            <h2 className="title">An NFT Like no other</h2>
            <p className='description'>Don&apos;t miss outon the release of our new NFT. Sign up below to recieve updates when we go live on 11/12.</p>
            <p className='description'>Don&apos;t miss outon the release of our new NFT. Sign up below to recieve updates when we go live on 11/12. Don&apos;t miss out on the release of our new NFT</p>
          </div>
        </div>

        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2"/>

            <h2 className="title">An NFT Like no other</h2>
            <p className='description'>Don&apos;t miss outon the release of our new NFT. Sign up below to recieve updates when we go live on 11/12.</p>
            <p className='description'>Don&apos;t miss outon the release of our new NFT. Sign up below to recieve updates when we go live on 11/12. Don&apos;t miss out on the release of our new NFT</p>
          </div>
        </div>
      </div>
    </div>
  );
}