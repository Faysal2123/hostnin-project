import { ComparisonTableData } from "../../types/ComparisonTableData";


export const comparisonTableData: ComparisonTableData = {
  plans: [
    { name: "Basic", price: 832, priceUnit: "/mo" },
    { name: "Starter", price: 2350, priceUnit: "/mo" },
    { name: "Professional", price: 2399, priceUnit: "/mo" },
    { name: "Ultimate", price: 2999, priceUnit: "/mo" },
  ],
  sections: [
    {
      title: "Hosting Features",
      features: [
        { label: "Disk Space", values: ["10 GB", "50 GB", "100 GB", "Unlimited"] },
        { label: "Domain Hosted", values: ["2", "5", "10", "Unlimited"] },
        { label: "One Click Optimization", values: ["Not Included", "Not Included", "45+ Optimization Option", "45+ Optimization Option"] },
        { label: "MySQL Database", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Bandwidth (Traffic)", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Multiple Hosting Locations", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Sub Domain", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "CPU Cores (per account)", values: ["1 CPU Core", "2 CPU Core", "3 CPU Core", "4 CPU Core"] },
        { label: "RAM", values: ["512 MB", "2 GB", "3 GB", "4 GB"] },
        { label: "Disk I/O", values: ["1 Mbps I/O", "50 Mbps I/O", "100 Mbps I/O", "Unmetered"] },
        { label: "Concurrent Connections", values: ["10 Entry Process", "50 Entry Process", "100 Entry Process", "Unmetered"] },
        { label: "Max. Number Of Processes", values: ["10 nPROC", "50 nPROC", "100 nPROC", "Unmetered"] },
        { label: "Remote MySQL Access", values: ["⭕", "⭕", "✔️", "✔️"] },
        { label: "Inode Limit", values: ["10,000", "50,000", "200,000", "300,000"] },
        { label: "Money-Back Guarantee", values: ["30 Days", "30 Days", "30 Days", "30 Days"] },
        { label: "Backup/Restoration", values: ["Included", "Included", "Included", "Included"] },
      ]
    },
    {
      title: "Mail Features",
      features: [
        { label: "Email Accounts", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Email Autoresponders", values: ["200", "500", "Unlimited", "Unlimited"] },
        { label: "Per Mailbox Storage", values: ["5 MB", "2 GB", "5 GB", "10 GB"] },
        { label: "Roundcube Client", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "SMTP, POP3, IMAP", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "External Mail Integration", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "SpamAssassin", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Mailing Lists", values: ["5", "100", "Unlimited", "Unlimited"] },
        { label: "SPF", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Domain Keys", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Email & Forwarders", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Spam Experts", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Email Backup & Restore", values: ["✔️", "✔️", "✔️", "✔️"] },
      ]
    },
    {
      title: "Database Features",
      features: [
        { label: "PHP Myadmin", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "PhpPG Admin", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "MySQL Databases", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Remote MySQL", values: ["⭕", "⭕", "✔️", "✔️"] },
        { label: "Database Backup", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Database Optimization", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Database Monitoring", values: ["⭕", "⭕", "✔️", "✔️"] },
      ]
    },
    {
      title: "Tech Features",
      features: [
        { label: "Web Server Type", values: ["Litespeed", "Litespeed", "Litespeed", "Litespeed"] },
        { label: "Storage Technology", values: ["NVMe SSD", "NVMe SSD", "NVMe SSD", "NVMe SSD"] },
        { label: "Php Version", values: ["5.6 to Latest", "5.6 to Latest", "5.6 to Latest", "5.6 to Latest"] },
        { label: "Realtime Traffic", values: ["20+", "100+", "500+", "1000+"] },
        { label: "Laravel Scripts", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Web Application", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Javascript", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "SSH Access", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "FTP Access", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Git Integration", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Node.js Support", values: ["⭕", "⭕", "✔️", "✔️"] },
        { label: "Python Support", values: ["⭕", "⭕", "✔️", "✔️"] },
      ]
    },
    {
      title: "Bite Spaceifications",
      features: [
        { label: "Storage Type", values: ["SSD", "SSD", "NVMe SSD", "NVMe SSD"] },
        { label: "Read/Write Speed", values: ["Standard", "Standard", "High", "Ultra High"] },
        { label: "I/O Operations", values: ["1K IOPS", "5K IOPS", "10K IOPS", "Unlimited"] },
        { label: "Data Transfer", values: ["1 Gbps", "2 Gbps", "5 Gbps", "10 Gbps"] },
        { label: "Backup Storage", values: ["5 GB", "20 GB", "50 GB", "100 GB"] },
        { label: "CDN Integration", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Load Balancing", values: ["⭕", "⭕", "✔️", "✔️"] },
      ]
    },
    {
      title: "Security & Management",
      features: [
        { label: "Backup Manager", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Virus Scanner", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "IP Blocking", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Hotlink Protection", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Redirect Manager", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "DNS Zone Editor", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Auto SSL", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "DDoS Protection", values: ["⭕", "✔️", "✔️", "✔️"] },
        { label: "Malware Scanning", values: ["⭕", "⭕", "✔️", "✔️"] },
        { label: "Firewall Protection", values: ["Basic", "Advanced", "Premium", "Enterprise"] },
      ]
    },
    {
      title: "Support Desk",
      features: [
        { label: "24/7 Call Support (What's App)", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "24/7 Chat Support", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Anydesk/Teamviewer", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Transfer Assistance", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Priority Support", values: ["⭕", "⭕", "✔️", "✔️"] },
        { label: "Dedicated Support Manager", values: ["⭕", "⭕", "⭕", "✔️"] },
        { label: "Response Time", values: ["4 Hours", "2 Hours", "1 Hour", "30 Minutes"] },
        { label: "Knowledge Base Access", values: ["✔️", "✔️", "✔️", "✔️"] },
        { label: "Video Tutorials", values: ["✔️", "✔️", "✔️", "✔️"] },
      ]
    },
  ]
};
