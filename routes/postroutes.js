app.post("/uyelik", async (req, res) => {
  const { adsoyad, tc, telefon, email, gorevyeri, unvan } = req.body;

  try {
    // Excel oluştur
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Üyelik Başvurusu");

    sheet.addRow(["Ad Soyad", adsoyad]);
    sheet.addRow(["TC Kimlik", tc]);
    sheet.addRow(["Telefon", telefon]);
    sheet.addRow(["E-posta", email]);
    sheet.addRow(["Görev Yeri", gorevyeri]);
    sheet.addRow(["Meslek / Unvan", unvan]);
    sheet.addRow(["Başvuru Tarihi", new Date().toLocaleString()]);

    const filePath = path.join(__dirname, "uyelik.xlsx");
    await workbook.xlsx.writeFile(filePath);

    // Gmail ile mail gönder
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mdemir.1428@gmail.com",
        pass: "<pvqa xnww wrwi rfco>" // Gmail uygulama şifresi
      }
    });

    await transporter.sendMail({
      from: '"Online Üyelik" <mdemir.1428@gmail.com>',
      to: "mdemir.1428@gmail.com", // Mailin gideceği adres
      subject: "Yeni Üyelik Başvurusu",
      text: `Yeni üyelik başvurusu alındı. Excel dosyası ekte.`,
      attachments: [
        {
          filename: "uyelik.xlsx",
          path: filePath
        }
      ]
    });

    res.send("Başvurunuz başarıyla gönderildi. Teşekkürler!");
  } catch (err) {
    console.error(err);
    res.send("Başvuru gönderilirken hata oluştu.");
  }
});
