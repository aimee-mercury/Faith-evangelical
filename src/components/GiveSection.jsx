import SectionHeading from "./SectionHeading.jsx";

export default function GiveSection() {
  return (
    <section className="section section--white" id="give">
      <div className="container">
        <SectionHeading kicker="Support the work" title="Give &amp; partner with us" align="center" />
        <p className="sectionLead sectionLead--center">
          Your giving enables us to preach the Gospel, serve our community, and advance God's
          kingdom in Rwanda and beyond. Every gift — tithe, offering, or special gift — makes
          a real difference.
        </p>

        <div className="giveGrid">
          <article className="giveCard">
            <span className="giveCard__icon" aria-hidden="true">📱</span>
            <h3 className="giveCard__title">MTN Mobile Money</h3>
            <p className="giveCard__body">
              Send your tithe or offering directly via MTN MoMo:
            </p>
            <p className="giveCard__detail">
              <strong>Bishop Isaac Karamira</strong>
              <br />
              <a href="tel:+250788852050">+250 788 852 050</a>
            </p>
            <p className="giveCard__note">
              Use your full name and "Tithe" or "Offering" as the reference.
            </p>
          </article>

          <article className="giveCard">
            <span className="giveCard__icon" aria-hidden="true">📲</span>
            <h3 className="giveCard__title">Airtel Money</h3>
            <p className="giveCard__body">
              Send your tithe or offering directly via Airtel Money:
            </p>
            <p className="giveCard__detail">
              <strong>Apostle Jane Karamira</strong>
              <br />
              <a href="tel:+250788877912">+250 788 877 912</a>
            </p>
            <p className="giveCard__note">
              Use your full name and "Tithe" or "Offering" as the reference.
            </p>
          </article>

          <article className="giveCard">
            <span className="giveCard__icon" aria-hidden="true">🏦</span>
            <h3 className="giveCard__title">Bank Transfer</h3>
            <p className="giveCard__body">For large gifts or international transfers:</p>
            <p className="giveCard__detail">
              <strong>Bank:</strong> Bank of Kigali
              <br />
              <strong>Account:</strong> Faith Evangelical Church Rwanda
              <br />
              <strong>Account No:</strong> Contact us for details
            </p>
            <p className="giveCard__note">
              Contact Bishop Isaac for bank account details.
            </p>
          </article>
        </div>

        <div className="giveNote">
          <h3 className="giveNote__title">How your gifts are used</h3>
          <ul className="giveNote__list">
            <li>Sustaining weekly church services and ministry programmes</li>
            <li>Supporting community outreach and evangelism across Rwanda</li>
            <li>Providing for the needs of widows, orphans, and vulnerable families</li>
            <li>Funding youth, children's, and women's ministry development</li>
            <li>Building and maintaining our church facilities</li>
            <li>Supporting missions and church planting beyond Rwanda</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
